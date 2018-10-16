





// getting started
const images = [
    {url:
    "https://d2njx87fm2ttul.cloudfront.net/images/default-source/news-items/katieormerod_oz_2z7a8589_mattgeorges-opt8a72c68c09bf6c968c24ff0000c7d089.tmb-t-1200x640.jpg?sfvrsn=81cdaa93_0",
    alt: "Cool"
    },
    {url:
    "https://usskiandsnowboard.org/sites/default/files/images/static-pages/StaticPageHeader_1600x1200_Snowboard_Jamie_Action_1.jpg",
    alt: "Really Cool"
    },
    {url:
    "https://images.unsplash.com/photo-1518608774889-b04d2abe7702?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=cdc8bcc00933d2d1c772721df2d75b16&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",    
    alt: "Even Cooler"
    },
    {url:
    "https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=918195bdc5a37a2f412cf49234183427&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"Cool contrast"
    },
    {url:
    "https://images.pexels.com/photos/240160/pexels-photo-240160.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    alt:"Another cool one"
    },
    {url:
    "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940",
    alt:"Getting better"
    },
    {url:
    "https://images.unsplash.com/photo-1523246181290-a16e4b9a00b5?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=89d67be335d2db081db0047ee0d3cafc&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"chillin"
    },
    {url:
    "https://images.unsplash.com/photo-1504480899134-8d1752cc1162?ixlib=rb-0.3.5&amp;s=dd6eb2a215cba1f013f3144d66e720ea&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"carvin"
    },
    {url:
    "https://images.unsplash.com/photo-1518085050105-3c33befa5442?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=97056e45ab456a1be0f7a1634e2223a0&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"rip"
    },
    {url:
    "https://images.unsplash.com/photo-1495469552678-d0fb77903866?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=be9333ce04b44cca21e4996ea7813620&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"soaring"
    },
    {url:
    "https://images.unsplash.com/photo-1518566163125-9bcd04025ed5?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=30099608d4f72889b18e44861c18da9c&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"lonely"
    },
    {url:
    "https://images.unsplash.com/photo-1481732724115-44a03cf18e9a?ixlib=rb-0.3.5&amp;s=d8e014869ef3d7ea029a51fb10c0393a&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
    alt:"resting"
    }
];
// const images = [
//     "https://d2njx87fm2ttul.cloudfront.net/images/default-source/news-items/katieormerod_oz_2z7a8589_mattgeorges-opt8a72c68c09bf6c968c24ff0000c7d089.tmb-t-1200x640.jpg?sfvrsn=81cdaa93_0",
//     "https://usskiandsnowboard.org/sites/default/files/images/static-pages/StaticPageHeader_1600x1200_Snowboard_Jamie_Action_1.jpg",
//     "https://images.unsplash.com/photo-1518608774889-b04d2abe7702?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=cdc8bcc00933d2d1c772721df2d75b16&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",    
//     "https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=918195bdc5a37a2f412cf49234183427&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb",
// ];

// function that getnerates the thumbnail div
// function that generates an img element
//inside and out.


const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
// console.log(modalElement);

//function that generates the img element
function createImage(imageInfo){
    const theImage = document.createElement('img');

    // theImage.src = imageInfo
    theImage.setAttribute('src', imageInfo.url);
    theImage.setAttribute('alt', imageInfo.alt);
    theImage.setAttribute('title', imageInfo.alt);

    // add an even listener to the image
    theImage.addEventListener('click', function(event){
        console.log('hello!');
        
        //the element that got clicked is accessible
        //as 'event.target'
        // and I will be able to read the "src" attribute
        console.log(event.target.src);

        // I can now set the output image's src to event.target.src
        outputElement.setAttribute('src', event.target.src);
        modalElement.classList.remove('modal-hidden');

    })

    return theImage;
}

//function that generates the thumbnail div
function createThumbnail(imageURL){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');
    const theNewImage = createImage(imageURL);
    theContainer.appendChild(theNewImage);

    return theContainer;
}

// just draw a thumbnail to the body
// so we can test it

// Loop through the images array.
// for each image, call the anonymous function.
// the anon func should expect to  receive an image URL
images.forEach(function(singleImageURL){

    // We pass that image URL to our createThumbnail func
    let aThumbnail = createThumbnail(singleImageURL);

    // then append that thumbnail to the page
    thumbnailContainer.appendChild(aThumbnail);
});

// let firstImageUrl = images[0];

// images.forEach(function(nextURL){
//     // let nextThumbnail = pop(nextURL);
//     thumbnailContainer.appendChild(nextURL);
// });


window.addEventListener('keydown', function(event){
    console.log('you pressed a key');
    console.log(event);
    // key: "Escape"
    // keyCode: 27
    if (event.keyCode === 27){
        console.log('I want to hide the modal!');
        modalElement.classList.add('modal-hidden');
    }
    // key: " "
    // keyCode: 32
    if (event.keyCode === 32){
        console.log('I want to hide the modal!');
        modalElement.classList.add('modal-hidden');
    }
});

//need a loop. 
//after every event on 'click'
//modalElement needs to go to "next" in images object
window.addEventListener('mousedown', function(event){
    console.log('you clicked with a mouse');
    console.log(event);
    modalElement.classList.add('modal-hidden');
    // modalElement.getElementById('modal-hidden').style.zIndex = "[1]";
    // images.forEach(function(event){
    //     images[event] += 1;
    //     console.log(event);
    // })
});
