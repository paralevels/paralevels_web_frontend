(ns search.helper
  (:require [goog.object :as gobj]))

(defn greet []
  (js/alert "Hello from ClojureScript Test 5!"))

;; Export search.greet function
(goog.exportSymbol "search.greet" greet)
