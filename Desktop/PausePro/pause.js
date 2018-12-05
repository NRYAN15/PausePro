// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

/*chrome.runtime.onMessage.addListener(
      function(message, callback) {
        if (message == "RunScript"){
          chrome.tabs.executeScript({
            code:`
                console.log("hello")
              chrome.tabs.query({}, function (tabs) {
                        for(var i = 0; i <tabs.length; i++){
                            tab[i].getElementById("video")[0].pause();
                          }
                        }
              )`
          });
        }
     });
     */
     chrome.runtime.onMessage.addListener(
       function(request,sender) {
         if (request.message == "RunScript"){

              var vid =document.querySelector('.ytp-play-button')
              if(vid!=null){
                vid.click();
              }
            }

         });
