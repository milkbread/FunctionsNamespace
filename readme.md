This is a simple test on how to build a namespace in JavaScript.

I started this, without getting any background information on namespaces...everything I saw so far, was quit confusing and seemed to be overloaded on informations and options!
I just 'stole' it from D3's namespacing!

### Level1: build up a basic namespace called "cGen"

2 (obvious) Rules that seem to be necessary:

* the "naming" of namespace should begin lowercase
* should have as less characters as possible ... as it will be always the leading string

### Level2: add an external function to the namespace

* the major library of "cGen" has to be loaded ... otherwise it won't work
* make sure to return the new function

### Level3: add an external "class" to the namespace

* the major library of "cGen" has to be loaded ... otherwise it won't work
* add the `var self = this;` to the major function ... not to an internal one