import app from 'flarum/common/app';

app.initializers.add('startracex/flarum-sample', () => {
  console.log('[startracex/flarum-sample] Hello, forum and admin!');
});
