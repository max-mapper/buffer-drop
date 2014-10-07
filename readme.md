# buffer-drop

high level client-side module to simplify dropping a file onto a page and reading it as a Buffer

## usage

will call the `onDrop` callback below whenever a file is dropped on the page. if multiple files are dropped at once it will read the first one only.

```JS
drop(function onDrop(err, data) {
  console.log('first file dropped on page as a Buffer:', data)
})
```
