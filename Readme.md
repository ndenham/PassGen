PassGen Bookmarklet
===================

PassGen is a Javascript bookmarklet which will allow the user to conveniently generate
random passwords. The user has the ability to configure password length and which
character types are to be included, i.e. a-z, A-Z, 0-9, !#@$? etc. The symbol set
can be modified on the fly to allow for idiotic websites with poor password policies.

This bookmarket will attempt to use the CSPRNG built-into most modern
browsers but will ultimately fall back to Math.Random() if none are available. A very
poorly conducted statistical analysis of 10,000 output characters proved the characters
to be evenly distributed, when using the CSPRNG. 

The code attached above could be easily modifiedin a variety of ways, but it then needs
to be crunchfied by one of a variety of [sources](http://ted.mielczarek.org/code/mozilla/bookmarklet.html). 
If you copy the passgenbookmarklet.js contents to the bookmarklet generator it will create
a link you can copy onto your bookmark bar. 
