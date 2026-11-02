
$(document).ready(function () {

 
  console.log('jQuery is ready!');


 
  $('h1').css('border-bottom', '3px solid #1a9c8a');

  var greetings = [
    'Hi, I am Your Name',
    'Hello! Welcome to my page',
    'Glad you stopped by!'
  ];
  var greetingIndex = 0; 

  $('#changeGreeting').on('click', function () {
    greetingIndex = (greetingIndex + 1) % greetings.length;

    
    $('#greeting').html('<em>' + greetings[greetingIndex] + '</em>');
  });

  function setLightTheme() {
    $('body').css({ 'background-color': '#ffffff', 'color': '#222222' });
    $('.card').css('background-color', '#f5f5f5'); 
  }

  function setDarkTheme() {
    $('body').css({ 'background-color': '#1e1e2e', 'color': '#f1f1f1' });
    $('.card').css('background-color', '#2a2a3c');
  }

  $('#themeLight').on('click', setLightTheme);
  $('#themeDark').on('click', setDarkTheme);



  $('#showBtn').on('click', function () {
    $('#aboutDetails').show();
  });

  $('#hideBtn').on('click', function () {
    $('#aboutDetails').hide();
  });

  $('#toggleBtn').on('click', function () {
    $('#aboutDetails').toggle(); 
  });


  $('#fadeInBtn').on('click', function () {
    $('.gallery-img').fadeIn(800);
  });

  $('#fadeOutBtn').on('click', function () {
    $('.gallery-img').fadeOut(800);
  });

  $('#fadeToggleBtn').on('click', function () {
    $('.gallery-img').fadeToggle(800);
  });

  $('.acc-heading').on('click', function () {
    $(this).next('.acc-panel').slideToggle(400);
  });

  $('#openAllBtn').on('click', function () {
    $('.acc-panel').slideDown(400);
  });

  $('#closeAllBtn').on('click', function () {
    $('.acc-panel').slideUp(400);
  });



  var barsOpen = false;

  function showMessage(text) {
    $('#skillMessage').text(text);
  }

  function createSkillItem(name, level) {
    var item = $('<li></li>');
    var nameSpan = $('<span class="skill-name"></span>').text(name);
    var barBg = $('<div class="bar-bg"></div>');
    var bar = $('<div class="bar"></div>').attr('data-level', level);

    barBg.append(bar);      
    item.append(nameSpan, barBg); 
    return item;
  }

  function growBar(bar) {
    bar.animate({ width: bar.data('level') + '%' }, 800);
  }

  function addSkill(where) {
    var name = $('#skillInput').val().trim();

    if (name === '') {
      showMessage('Please type a skill first.');
      return;
    }

    var item = createSkillItem(name, 50);

    if (where === 'prepend') {
      $('#skillList').prepend(item);
    } else {
      $('#skillList').append(item);
    }

    if (barsOpen) {
      growBar(item.find('.bar'));
    }

    $('#skillInput').val(''); // clear the box
    showMessage('Added: ' + name);
  }

  $('#addSkillBtn').on('click', function () {
    addSkill('append');
  });

  $('#prependSkillBtn').on('click', function () {
    addSkill('prepend');
  });

  $('#removeSkillBtn').on('click', function () {
    var typed = $('#skillInput').val().trim();

    if (typed === '') {
      showMessage('Type the skill you want to remove in the box.');
      return;
    }

    var matches = $('#skillList li').filter(function () {
      return $(this).find('.skill-name').text().toLowerCase() === typed.toLowerCase();
    });

    if (matches.length === 0) {
      showMessage('Skill "' + typed + '" was not found.');
      return;
    }

    matches.remove();
    $('#skillInput').val('');
    showMessage('Removed: ' + typed);
  });

  $('#animateBtn').on('click', function () {
    if (barsOpen === false) {
      $('.bar').each(function () {
        growBar($(this));
      });
      barsOpen = true;
    } else {
      $('.bar').animate({ width: '0%' }, 800);
      barsOpen = false;
    }
  });



  var links = [
    { url: 'https://github.com/your-username', text: 'My GitHub' },
    { url: 'https://www.linkedin.com/in/your-profile', text: 'My LinkedIn' }
  ];
  var linkIndex = 0;

  $('#changeLinkBtn').on('click', function () {
    linkIndex = (linkIndex + 1) % links.length; 

    $('#socialLink')
      .attr('href', links[linkIndex].url)
      .text(links[linkIndex].text);       
  });



  $('#infoForm').on('submit', function (event) {
    event.preventDefault();
  });

  $('#nameInput').on('input', function () {
    $('#previewName').text($(this).val()); 
  });

  $('#emailInput').on('input', function () {
    $('#previewEmail').text($(this).val());
  });

});
