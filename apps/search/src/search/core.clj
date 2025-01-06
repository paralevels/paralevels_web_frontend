(ns search.core
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [compojure.core :refer [GET routes]]
            [compojure.route :refer [resources not-found]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.util.response :as response]
            [clj-http.client :as http]))

(def app
  (-> (routes
       ;; Routes /search to resources/public/search.html
       (GET "/search" [] {:status 301 :headers {"Location" "/search.html"}})

       ;; Routes /contentsearch to the actual content search application
       (GET "/searchcontents" {query-params :query-params}
              (let [url "http://localhost:8080/search"
                    response (http/get url {:query-params query-params})]
                {:status (:status response)
                 :headers {"Content-Type" "application/json"}
                 :body (:body response)}))

       (resources "/")
       (not-found "Page not found"))
      wrap-params))

(defn -main [& args]
  (run-jetty app {:port 8070 :join? false}))
