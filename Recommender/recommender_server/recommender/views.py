from django.template import Context, RequestContext
from django.shortcuts import render_to_response, get_object_or_404
from django.http import JsonResponse, HttpResponse
import json
import pandas as pd
import math
from math import sin, cos, sqrt, atan2, radians
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import firebase_admin
from firebase_admin import credentials, firestore
CORS_ORIGIN_ALLOW_ALL = True


def callback(request):

    verification_code = request.GET.get('verification_code')
    userid = request.GET.get('userid')

    context = {
        'verification_code': verification_code,
        'userid': verification_url,
    }

    ##return render_to_response('callback.html', context, context_instance=RequestContext(request))

def get_distance(lat1x, long1, latx2, long2):
    R = 6373.0

    lat1 = radians(lat1x)
    lon1 = radians(long1)
    lat2 = radians(latx2)
    lon2 = radians(long2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    if math.isnan(distance):
       distance = 10000
    print("Result:", distance)

    return distance
def populate_db(test):
    datab = firestore.client()
    #usersref = datab.collection(u'features')
    #docs = usersref.stream()
    #for doc in docs:
        #print('{} : {}'.format(doc.id, doc.to_dict()))

    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy.csv"
    metadata = pd.read_csv(filename, low_memory=False, delimiter=',')

    #adding constraints
    for i in range(0, len(metadata)):
        print(i)
        if 300 < get_distance(53.33306, -6.24889, metadata.loc[i, 'latitude'], metadata.loc[i, 'longitude']):
            print(metadata.loc[i, 'latitude'])
            metadata = metadata.drop(index=i)
            print("drop")
        else:
            try:
                print("add")
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
            except:
                print("ERROR uploading feature")


    return JsonResponse(json.loads("done"), safe=False)
# Create your views here.
def recommend_coords(request):
    rec_request = request.GET['place']
    rec_lat = request.GET['lat']
    rec_lat = float(rec_lat)
    rec_long = request.GET['long']
    rec_long = float(rec_long)
    rec_distance = request.GET['distance']
    rec_distance= float(rec_distance)

    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy - Copy.csv"


    metadata = pd.read_csv(filename, low_memory=False , delimiter=',')
    metadata.dropna(how='all')

    metadata.head()
    for i in range(0, len(metadata)):
        print(i)
        if rec_distance < get_distance(rec_lat, rec_long, metadata.loc[i, 'latitude'], metadata.loc[i, 'longitude']):
            print(metadata.loc[i, 'latitude'])
            metadata = metadata.drop(index=i)
            print("drop")
    for i in metadata.index:

        print(metadata.loc[i, 'latitude'])
    metadata = metadata.reset_index(drop=True)
    tfidf = TfidfVectorizer(stop_words='english')
    metadata['description'] = metadata['description'].fillna('')
    tfidf_matrix = tfidf.fit_transform(metadata['description'])
    tfidf.get_feature_names()[30:30]
    cosine_score = linear_kernel(tfidf_matrix, tfidf_matrix)

    indices = pd.Series(metadata.index, index=metadata['title']).drop_duplicates()
    result = get_recommendations(rec_request, cosine_score, indices, metadata)

    print(metadata.iloc[result].to_json)
    return JsonResponse(json.loads(metadata.iloc[result].to_json(orient='records')), safe=False)

def recommend(request):


    rec_request = request.GET['place']
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

    listOfStr = get_recommendations(rec_request, cosine_score, indices, metadata)
    result = get_recommendations(rec_request, cosine_score, indices, metadata)
    #listOfStr.to_json()
    print(metadata.iloc[result].to_json)
    return JsonResponse(json.loads(metadata.iloc[result].to_json(orient='records')), safe=False)
def recommend_Multi(request):


    type = request.GET['type']
    filename = "E:\Documents\GitHub\RoadTrip\Recommender\Include\wikivoyage - Copy - Copy.csv"

    metadata = pd.read_csv(filename, low_memory=False, delimiter=',')
    # print(metadata['description'].head(20))
    if type != 'all':
        metadata = metadata[metadata.type.str.contains(type, na=False)]
        metadata = metadata.reset_index(drop=True)
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

    result = get_recommendations_multi(cosine_score, indices, metadata)


    datab = firestore.client()
    usersdis = datab.collection(u'dislikes')
    docsdis = usersdis.stream()
    usersref = datab.collection(u'featuresrec')
    docs = usersref.stream()
    finalpd = metadata.iloc[result]
    print("hererye")
    #print(finalpd)
    for doc in docs:#to remove likes
        print('{} : {}'.format(doc.id, doc.to_dict()['title']))
        finalpd = finalpd[~finalpd.title.str.contains(doc.to_dict()['title'], na=False)]
        #print(finalpd)
    for doc in docsdis:#to remove dislikes
            print('{} : {}'.format(doc.id, doc.to_dict()['title']))
            finalpd = finalpd[~finalpd.title.str.contains(doc.to_dict()['title'], na=False)]

    metadata = finalpd

    print(metadata.to_json)
    return JsonResponse(json.loads(metadata.to_json(orient='records')), safe=False)
    #return JsonResponse(json.loads(metadata.iloc[result].to_json(orient='records')), safe=False)

def get_recommendations_multi( cosine_score,indices,metadata):

    datab = firestore.client()
    usersref = datab.collection(u'featuresrec')
    docs = usersref.stream()
    for doc in docs:
        print('{} : {}'.format(doc.id, doc.to_dict()['title']))
        try:
            scoring = list(enumerate(cosine_score[indices[doc.to_dict()['title']]]))
        except:
            print("invalid input from database")


    scoring = sorted(scoring, key=lambda x: x[1], reverse=True)
    scoring = scoring[1:20]
    result = [i[0] for i in scoring]
    print(result)
    #return metadata['title'].iloc[result]
    return result

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



#intitlise firbase
cred = credentials.Certificate(
        "E:\Documents\GitHub\RoadTrip\Recommender\Include\\road-trip-companion-firebase-adminsdk-vwcjy-018d013f28.json")
firebase_admin.initialize_app(cred)