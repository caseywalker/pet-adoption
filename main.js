
const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81sCOFgpjkL._AC_SL1500_.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.popsci.com/resizer/bMm9C-yuxfHrb2RubGevFZVY2U4=/760x506/filters:focal(960x640:961x641)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/CDGDHC66UGCVYCTPKSWMWS3YII.jpg"
    },
    {
      name: "Sassy",
      color: "Poop-Colored",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Poop-Colored",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/originals/8c/86/54/8c8654a568b7143a0ab6464361497480.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Poop-Colored",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://cdn.the-scientist.com/assets/articleNo/36893/aImg/15927/humongous-herbivorous-dinosaur-l.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://lh3.googleusercontent.com/proxy/8E8r4cr2mxWZF-d26SzI_WZmAy7qGToiQhjGhlpQ7U_dlbRI1pRb7SbuSWJ1ipZnGu9z_-N0F6fkE48n79Lebyes4x4HbSx_H9-Ucdv_sRC-mFhxz3NLXB0ljQ"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2017/07/jurassic-park-dinosaurs-replaced-with-cats-16-5978351341fe8__700.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2018/08/180808-woman-seeks-orange-cat-feature.jpg?quality=80&strip=all&ssl=1"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "https://www.dog-breeds-expert.com/images/olde_english_bulldogge_laredo-txDOTamericanlistedDotcom.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHsC9pHvqy66WPMYgxFJLSxR7O2krtmrLdA&usqp=CAU"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://images.ctfassets.net/cnu0m8re1exe/70JhB0XIHJmprEsQmEIMx3/eee66f1505b8b1d53ff0f3b18b305a5e/shutterstock_1099958171.jpg?w=650&h=433&fit=fill"
    }
  ];

  //  *** DOM Printer *** //
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

  // *** HTML Builders *** //
const petBuilder = (taco) => {
  let domString = ''

  for (const element of taco) {
    domString += `<div class="card text-center card my-2" style="width: 18rem;">
      <div class="card-header fw-bold text-secondary">
       <p>${element.name}</p>
      </div>
      <div class="card-body">
        <div class="card-img-holder">
          <img class="img-thumbnail p-2" src="${element.imageUrl}" alt="a cat">
        </div>
        <h5 class="card-title pt-2">${element.color}</h5>
        <p class="card-text">${element.specialSkill}</p>
      </div>
      <div class="card-footer ${element.type}-footer"><p>${element.type}</p></div>
    </div>`;
  }
  printToDom('#pet-cards', domString)

};

  // *** Event Handlers *** //
const handleButtonClick = (e) => {
  const buttonId = e.target.id;
  const newArray = [];

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === buttonId) {
      newArray.push(pets[i]);
    }
  }

  if (buttonId === 'all') {
    petBuilder(pets)
  } else {
    petBuilder(newArray);
  }

}
  // *** Event Listeners *** //
const buttonEvents = () => {
  document.querySelector('#all').addEventListener('click', handleButtonClick);
  document.querySelector('#cat').addEventListener('click', handleButtonClick);
  document.querySelector('#dog').addEventListener('click', handleButtonClick);
  document.querySelector('#dino').addEventListener('click', handleButtonClick);

};

  // *** Initializers *** //
const init = () => {
  petBuilder(pets);
  buttonEvents();
}

init();
