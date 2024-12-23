(ns search.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [compojure.core :refer [GET routes]]
            [compojure.route :refer [resources not-found]]
            [ring.middleware.params :refer [wrap-params]]))

(defn search-handler [request]
  (let [query (get-in request [:params "query"])]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (str "{\"message\": \"You searched for: " query "\"}")}))

(def app
  (-> (routes
       (GET "/" [] {:status 301 :headers {"Location" "/index.html"}})
       (GET "/search" request (search-handler request))
       (resources "/")
       (not-found "Page not found"))
      wrap-params))

(defn -main [& args]
  (run-jetty app {:port 80 :join? false}))
