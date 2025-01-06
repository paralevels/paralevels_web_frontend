(ns search.core
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [compojure.core :refer [GET routes]]
            [compojure.route :refer [resources not-found]]
            [ring.middleware.params :refer [wrap-params]]))

(def app
  (-> (routes
       ;; Routes /search to resources/public/search.html
       (GET "/search" [] {:status 301 :headers {"Location" "/search.html"}})
       (resources "/")
       (not-found "Page not found"))
      wrap-params))

(defn -main [& args]
  (run-jetty app {:port 80 :join? false}))
