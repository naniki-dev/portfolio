document.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.getElementById('title');
  const subheadingEl = document.getElementById('subheading');

  const titleTypewriter = new Typewriter(titleEl, {
    delay: 60,
    cursor: '|',
  });

  titleTypewriter
    .typeString('Lethabo Kgasi')
    .callFunction(() => {
      // hide the cursor on the heading once it's done
      const headingCursor = titleEl.querySelector('.Typewriter__cursor');
      if (headingCursor) headingCursor.style.display = 'none';

      // start typing the paragraph, cursor lands here
      const subheadingTypewriter = new Typewriter(subheadingEl, {
        delay: 40,
        cursor: '|',
      });
      subheadingTypewriter.typeString('software developer, building with intent').start();
    })
    .start();
});