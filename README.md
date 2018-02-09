## Project Description

This project is a revision of the Tap Room Angular2 application.



## Notes

Add a Notes section where you document unforeseen issues and questions you encountered during your development process. Commit these notes by themselves.
| Issue                                        | Notes                                                                                                                                                                                                                                                                                                                                     | Resolution                                                                                            |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Placement of Edit Keg in Component Tree      | Making the tree, I was unsure where a component that edits an individual keg from the keg list would go. I eventually put it coming off of keg list, because that's where the data that would be modified by the user resides, but was unsure because I also imagined edit keg to be a dynamically routed page for each keg on the list.  | not found yet                                                                                         |
| RangeError: Maximum call stack size exceeded | keg list component is mapping masterKegList using Keg model and index. Something is causing an infinite loop!                                                                                                                                                                                                                             | accidentally declared: import Keg from './KegList'; on KegList. Resolved path and issue was resolved. |
| x                                            | xx                                                                                                                                                                                                                                                                                                                                        | xxx                                                                                                   |
