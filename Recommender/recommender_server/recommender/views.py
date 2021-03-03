from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import json
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import firebase_admin
from firebase_admin import credentials, firestore
CORS_ORIGIN_ALLOW_ALL = True


def populate_db(test):
    cred = credentials.Certificate("E:\Documents\GitHub\RoadTrip\Recommender\Include\\road-trip-3d884-firebase-adminsdk-5gfbh-af385cd233.json")
    firebase_admin.initialize_app(cred)
    datab = firestore.client()
    usersref = datab.collection(u'features')
    docs = usersref.stream()
    for doc in docs:
        print('{} : {}'.format(doc.id, doc.to_dict()))

    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy.csv"

    metadata = pd.read_csv(filename, low_memory=False, delimiter=',')
    for i in range(len(metadata)):
        print(metadata.loc[i, 'title'])
        doc_ref = datab.collection(u'features').document(u'ID' + str(i))
        doc_ref.set({
            u'accessibility': metadata.loc[i, 'accessibility'],
            u'address': metadata.loc[i, 'address'],
            u'alt': metadata.loc[i, 'alt'],
            u'article': metadata.loc[i, 'article'],
            u'checkIn': metadata.loc[i, 'checkIn'],
            u'checkOut': metadata.loc[i, 'checkOut'],
            u'description': metadata.loc[i, 'description'],
            u'directions': metadata.loc[i, 'directions'],
            u'email': metadata.loc[i, 'email'],
            u'fax': metadata.loc[i, 'fax'],
            u'hours': metadata.loc[i, 'hours'],
            u'image': metadata.loc[i, 'image'],
            u'lastEdit': metadata.loc[i, 'lastEdit'],
            u'latitude': metadata.loc[i, 'latitude'],
            u'longitude': metadata.loc[i, 'longitude'],
            u'phone': metadata.loc[i, 'phone'],
            u'price': metadata.loc[i, 'price'],
            u'title': metadata.loc[i, 'title'],
            u'tollFree': metadata.loc[i, 'tollFree'],
            u'type': metadata.loc[i, 'type'],
            u'url': metadata.loc[i, 'url'],
            u'wifi': metadata.loc[i, 'wifi'],
            u'wikidata': metadata.loc[i, 'wikidata'],
            u'wikipedia': metadata.loc[i, 'wikipedia'],
        })

    return JsonResponse(json.loads("done"), safe=False)
# Create your views here.
def recommend_coords(request,lat,long):
    rec_reqiest = request.GET['place']
    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy - Copy.csv"


    metadata = pd.read_csv(filename, low_memory=False, delimiter=',')



    tfidf = TfidfVectorizer(stop_words='english')
    metadata['description'] = metadata['description'].fillna('')
    tfidf_matrix = tfidf.fit_transform(metadata['description'])
    tfidf.get_feature_names()[5000:5010]
    cosine_score = linear_kernel(tfidf_matrix, tfidf_matrix)

    indices = pd.Series(metadata.index, index=metadata['title']).drop_duplicates()
    result = get_recommendations(rec_reqiest, cosine_score, indices, metadata)

    print(metadata.iloc[result].to_json)
    return JsonResponse(json.loads(metadata.iloc[result].to_json(orient='records')), safe=False)

def recommend(request):
    rec_reqiest = request.GET['place']
    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy - Copy.csv"

    metadata = pd.read_csv(filename, low_memory=False, delimiter=',')
    # print(metadata['description'].head(20))

    # tfidf = TfidfVectorizer(stop_words='english',max_features=1)

    tfidf = TfidfVectorizer(stop_words='english')
    metadata['description'] = metadata['description'].fillna('')

    tfidf_matrix = tfidf.fit_transform(metadata['description'])

    # print(tfidf_matrix.shape)
    tfidf.get_feature_names()[5000:5010]

    cosine_score = linear_kernel(tfidf_matrix, tfidf_matrix)

    # cosine_score.shape
    # cosine_score[1]

    indices = pd.Series(metadata.index, index=metadata['title']).drop_duplicates()

    # indices[:10]
    #print("recommendation: " + get_recommendations(rec_reqiest, cosine_score, indices, metadata))
    #return HttpResponse(get_recommendations('Kruithuis', cosine_score, indices, metadata)+"<br>")

    listOfStr = get_recommendations(rec_reqiest, cosine_score, indices, metadata)
    result = get_recommendations(rec_reqiest, cosine_score, indices, metadata)
    #listOfStr.to_json()
    print(metadata.iloc[result].to_json)
    return JsonResponse(json.loads(metadata.iloc[result].to_json(orient='records')), safe=False)
    #return JsonResponse({'foo': 'bar'})
    #return JsonResponse(metadata.iloc[result].to_json().key.slice(2, response.key.length-2), safe=False)
    #return JsonResponse(metadata['title'].iloc[result].to_json, safe=False)

def get_recommendations(title, cosine_score,indices,metadata):

    scoring = list(enumerate(cosine_score[indices[title]]))
    scoring = sorted(scoring, key=lambda x: x[1], reverse=True)
    scoring = scoring[1:11]
    result = [i[0] for i in scoring]
    print(result)
    #return metadata['title'].iloc[result]
    return result
def get_feature(request):
    rec_reqiest = request.GET['place']
    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy - Copy.csv"

    metadata = pd.read_csv(filename, low_memory=False, delimiter=',')

    #metadata.set_index("title", inplace=True)
    print(metadata.loc[metadata['title'] == rec_reqiest])

    return JsonResponse(json.loads(metadata.loc[metadata['title'] == rec_reqiest].to_json(orient='records')), safe=False)
    #return JsonResponse(json.loads(metadata.loc[rec_reqiest]), safe=False)