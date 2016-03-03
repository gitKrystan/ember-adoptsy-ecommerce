import Ember from 'ember';

export function dogCarousel(dog) {
  var dog = dog[0];
  var dogID = dog.get('id');
  var dogImages = dog.get('images');
  var indicatorsHtml = ``;
  var slidesHtml = ``;
  var htmlClass = 'active';

  for (var i = 0; i < dogImages.length; i++) {
    if (i != 0) {
      htmlClass = '';
    }
    indicatorsHtml += `<li data-target=${'#dog-modal' + dogID} data-slide-to=${i} class=${htmlClass}></li>`;

    var caption = dogImages[i].caption || '';
    slidesHtml += `<div class="item ${htmlClass}">
        <img src=${dogImages[i].url} alt=${caption}>
        <div class="carousel-caption">
          ${caption}
        </div>
      </div>`
  }

  var carouselHtml = `<div id=${'dog-modal' + dogID} class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      ${indicatorsHtml}
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      ${slidesHtml}
    </div>
    <!-- Controls -->
    <a class="left carousel-control" href=${'#dog-modal' + dogID} role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href=${'#dog-modal' + dogID} role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`

  return Ember.String.htmlSafe(carouselHtml);
}

export default Ember.Helper.helper(dogCarousel);
