## Project Description

This project is a revision of the [Tap Room Angular2](https://github.com/sailor27/react-taproom.git) application.

## Installation Instructions

```
in the terminal:
* npm install webpack@3.4.0 webpack-dev-server@2.5.0 eslint eslint-plugin-react -g

* clone this repository
* npm init
* npm install
```

## Component Tree
https://imgur.com/a/pZgNT
![alt text](https://imgur.com/a/pZgNT)

## Future Styling Enhancements

* Use color intentionally throughout
* Add box shadows
* Style Add Keg form
* Hover color for a tags

## Notes

Add a Notes section where you document unforeseen issues and questions you encountered during your development process. Commit these notes by themselves.


| Issue 	| Notes 	| Resolution 	|
|-----------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Placement of Edit Keg in Component Tree 	| Making the tree, I was unsure where a component that edits an individual keg from the keg list would go. I eventually put it coming off of keg list, because that's where the data that would be modified by the user resides, but was unsure because I also imagined edit keg to be a dynamically routed page for each keg on the list.  	| not found yet 	|
| RangeError: Maximum call stack size exceeded 	| keg list component is mapping masterKegList using Keg model and index. Something is causing an infinite loop! 	| accidentally declared: import Keg from './KegList'; on KegList. Resolved path and issue was resolved. 	|
| console error: Unknown props `global`, `jsx` on style tag in app component  	| This error started appearing when I added a style jsx tag with a global flag on App. It does not prevent the page from rendering, or the styles in the tag from appearing globally 	| resolved but unsure with what step 	|
| Unexpected character ' ? ' when importing images 	| This error happened when I imported an image from the assets folder. 	| I forgot to install url-loader and file-loader packages, and add rules to the webpack config for loading image files. Resolved after I did these steps. 	|
| Unable to use color variables inline or in css objects 	| It would be better if I could use the style jsx color variables throughout the app in all the styling methods, but currently can only in style jsx tags 	|  . 	|
