const tabs = function(selector) {
    const tabContainer = document.querySelectorAll(selector);

    const tabHandler = function(buttons, contents) {
        buttons.forEach(function(btn) {
            btn.addEventListener('click', function(){
                buttons.forEach(function(elem){
                    elem.classList.remove('active');
                    btn.classList.add('active');
                });

                const indexTab = btn.dataset.tab;

                contents.forEach(function (elem){
                    if (elem.dataset.tab === indexTab) {
                        elem.classList.add('active')
                    }else {
                        elem.classList.remove('active');
                    }
                })
            });
        });
    }

    tabContainer.forEach(function(tab) {
        const tabButtons = tab.querySelectorAll('.tab');
        const contents = tab.querySelectorAll('.content');

        tabHandler(tabButtons, contents);
    });
}

tabs('.tabs-container');