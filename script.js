// script.js
// All the jQuery code for the page.
// Everything is inside $(document).ready(), so it runs only after the HTML has loaded.
$(document).ready(function () {

  // ---------- Task 0: quick test ----------
  // If this text shows up in the console (press F12), jQuery is loaded.
  console.log('jQuery is ready!');


  // ---------- Part 1: Selectors & CSS ----------

  // Tag selector: 'h1' means "every <h1> on the page"
  $('h1').css('border-bottom', '3px solid #1a9c8a');

  // Greetings that the "Change greeting" button cycles through
  var greetings = [
    'Hi, I am Your Name',
    'Hello! Welcome to my page',
    'Glad you stopped by!'
  ];
  var greetingIndex = 0; // which greeting is showing now

  $('#changeGreeting').on('click', function () {
    // Move to the next greeting. After the last one, go back to the first (0).
    greetingIndex = (greetingIndex + 1) % greetings.length;

    // .html() puts the text inside the h2 as HTML.
    // The <em> tag would show as a tag if we used .text() instead.
    $('#greeting').html('<em>' + greetings[greetingIndex] + '</em>');
  });

  // Theme buttons: .css() changes the colours of the elements
  function setLightTheme() {
    $('body').css({ 'background-color': '#ffffff', 'color': '#222222' });
    $('.card').css('background-color', '#f5f5f5'); // .card = every section
  }

  function setDarkTheme() {
    $('body').css({ 'background-color': '#1e1e2e', 'color': '#f1f1f1' });
    $('.card').css('background-color', '#2a2a3c');
  }

  $('#themeLight').on('click', setLightTheme);
  $('#themeDark').on('click', setDarkTheme);


  // ---------- Part 2: Effects ----------

  // Task 2: show, hide and toggle the "About Me" details
  $('#showBtn').on('click', function () {
    $('#aboutDetails').show();
  });

  $('#hideBtn').on('click', function () {
    $('#aboutDetails').hide();
  });

  $('#toggleBtn').on('click', function () {
    $('#aboutDetails').toggle(); // shows it if hidden, hides it if shown
  });

  // Task 3: fade the gallery pictures in and out
  // 800 is the time in milliseconds (0.8 seconds)
  $('#fadeInBtn').on('click', function () {
    $('.gallery-img').fadeIn(800);
  });

  $('#fadeOutBtn').on('click', function () {
    $('.gallery-img').fadeOut(800);
  });

  $('#fadeToggleBtn').on('click', function () {
    $('.gallery-img').fadeToggle(800);
  });

  // Task 4: clickable headings that open and close their panel
  $('.acc-heading').on('click', function () {
    // $(this) is the heading that was clicked.
    // .next() moves to the element right after it, which is the panel.
    $(this).next('.acc-panel').slideToggle(400);
  });

  $('#openAllBtn').on('click', function () {
    $('.acc-panel').slideDown(400);
  });

  $('#closeAllBtn').on('click', function () {
    $('.acc-panel').slideUp(400);
  });


  // ---------- Part 3 + 4: Skills, skill bars, link, form ----------

  // true when the skill bars are grown to full size, false when they are at 0
  var barsOpen = false;

  // Shows a message under the skill buttons.
  // We use .text() (not .html()), so anything the user types is shown as plain text.
  function showMessage(text) {
    $('#skillMessage').text(text);
  }

  // Builds a new <li> with a name and an empty skill bar
  function createSkillItem(name, level) {
    var item = $('<li></li>');
    var nameSpan = $('<span class="skill-name"></span>').text(name);
    var barBg = $('<div class="bar-bg"></div>');
    var bar = $('<div class="bar"></div>').attr('data-level', level);

    barBg.append(bar);      // put the bar inside the grey background
    item.append(nameSpan, barBg); // put name and bar inside the <li>
    return item;
  }

  // Grows one bar from 0% to its own level, e.g. data-level="75" -> 75%
  function growBar(bar) {
    bar.animate({ width: bar.data('level') + '%' }, 800);
  }

  // Adds a skill at the end of the list (append) or at the start (prepend)
  function addSkill(where) {
    // .val() reads what is in the input box. trim() removes spaces at the start and end.
    var name = $('#skillInput').val().trim();

    // Task 5: do not allow an empty skill
    if (name === '') {
      showMessage('Please type a skill first.');
      return;
    }

    var item = createSkillItem(name, 50); // a new skill gets 50%

    if (where === 'prepend') {
      $('#skillList').prepend(item);
    } else {
      $('#skillList').append(item);
    }

    // If the bars are already open, grow the new bar as well
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

  // Remove Skill: removes the skill whose name is the same as the text in the box
  $('#removeSkillBtn').on('click', function () {
    var typed = $('#skillInput').val().trim();

    if (typed === '') {
      showMessage('Type the skill you want to remove in the box.');
      return;
    }

    // Go through every <li> and keep only the ones with the same name.
    // toLowerCase() makes "html" and "HTML" count as the same.
    var matches = $('#skillList li').filter(function () {
      return $(this).find('.skill-name').text().toLowerCase() === typed.toLowerCase();
    });

    if (matches.length === 0) {
      showMessage('Skill "' + typed + '" was not found.');
      return;
    }

    matches.remove(); // .remove() deletes those items from the page
    $('#skillInput').val('');
    showMessage('Removed: ' + typed);
  });

  // Task 8: "Animate My Skills" button. First click grows the bars, next click shrinks them.
  $('#animateBtn').on('click', function () {
    if (barsOpen === false) {
      // Grow every bar to its own target width
      $('.bar').each(function () {
        growBar($(this));
      });
      barsOpen = true;
    } else {
      // Shrink every bar back to zero
      $('.bar').animate({ width: '0%' }, 800);
      barsOpen = false;
    }
  });


  // ---------- Task 6: change the social link with .attr() ----------

  var links = [
    { url: 'https://github.com/your-username', text: 'My GitHub' },
    { url: 'https://www.linkedin.com/in/your-profile', text: 'My LinkedIn' }
  ];
  var linkIndex = 0;

  $('#changeLinkBtn').on('click', function () {
    linkIndex = (linkIndex + 1) % links.length; // switch between the two links

    $('#socialLink')
      .attr('href', links[linkIndex].url) // .attr() changes the href attribute
      .text(links[linkIndex].text);       // .text() changes the words on the link
  });


  // ---------- Task 7: live preview of the form ----------

  // Stop the form from reloading the page when the user presses Enter
  $('#infoForm').on('submit', function (event) {
    event.preventDefault();
  });

  // The "input" event runs every time the user types or pastes something
  $('#nameInput').on('input', function () {
    $('#previewName').text($(this).val()); // .val() reads the box, .text() shows it
  });

  $('#emailInput').on('input', function () {
    $('#previewEmail').text($(this).val());
  });

});
