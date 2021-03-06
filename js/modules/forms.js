import {closeModal, openModal} from './modal';

function forms() {
    //Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Please wait a call',
        failure: 'Something bad happend'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
         display:block;
         margin: 0 auto;
         `;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();

                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');


            //request.setRequestHeader('Content-type', 'multipart/form-data');


            /*      request.send(formData);
         request.addEventListener('load', () => {
             if (request.status === 200) {
                 
             } else {
                 showThanksModal(message.failure);
             }
         });
*/
        });
    }
}
export default forms;