# overscore
Overscore provides a usefull _Array function. It's a subclass of the native Array, with a lot of utility functions from underscore.

## Example

```
_Array(1,2,3).push([1,2]).push(null)
  .flatten().uniq().invoke('toString')
  .each(function (n) {
    console.log('number ' + n);
  });
```
