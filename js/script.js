window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    function tabsMainFunction(roditel, button, content){
        let info = document.querySelector(roditel),
            tab = document.getElementsByClassName(button),
            tabContent = document.getElementsByClassName(content);

        function hideTabContent(a) {
            for(let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b){
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
        info.addEventListener("click", function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        })
    };
    tabsMainFunction('.info-header', 'info-header-tab', 'info-tabcontent');
})