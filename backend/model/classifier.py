import pandas as pd
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestClassifier


class QueryClassifier:

    def train(self, X_train, y_train, model=None):
        cv = CountVectorizer() 
        cvm = cv.fit_transform(X_train) 
        X_train = pd.DataFrame(cvm.toarray(), columns=cv.get_feature_names())

        if not model:
            model = RandomForestClassifier(n_estimators=350, max_depth=10, oob_score=0.5)
        model.fit(X_train, y_train)

        with open('./service/model/model.pkl', 'wb') as fout:
            pickle.dump([cv, model], fout)

    def predict(self, X):
        with open('./model/model.pkl', 'rb') as f:
            vectorizer, model = pickle.load(f)
            return model.predict(vectorizer.transform(X).toarray())
