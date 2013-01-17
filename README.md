insHide-jQuery-Plugin
=====================

A jQuery plugin to add class to elements based on their position inside their parent

*Imagine a (custom) anilmated slider (or any dynamic awesome animation)*
*where children elements could be half (or 30%) inside a parent (overflow: hidden)?*  
ಠ_ಠ

*Those elements would need to get a specific style to beautify the partially hidden/showed content*

*This plugin will not generate any magical CSS but apply classes to help the CSS guy*  
㋛

****

##Options

*with default values*

**classhin**  : 'in'
*Class to apply to elements inside the parent*

**classhout** : 'out'
*Class to apply to elements outside the parent*

**classlast** : 'lastin'
*Class to apply to the last element inside the parent*

**minimum**   : 100
*Minimum percentage (0-100) of elements **body** outside their parent boundaries where **classin** should be applied*

**reset**     : false
*Remove applied classes*

****

##Examples

**classes**

    $('#yourWrapper').inshide(
      {
        classhin  : 'insideMyParent',
        classhout : 'OutsideMyParent',
        classlast : 'LastShowedOfMyParent',
      }
    );

Then your CSS guy could implement them to beautify the mess created by the *awesome* animation :

    .insideMyParent { color: green }
    .OutsideMyParent { color: red }
    .LastShowedOfMyParent { color: blue }

**minimum**

    // Apply classhin even to elements with only 30% of their body inside their parent (70% hidden..)
    $('#yourWrapper').inshide({minimum:30});

**reset**

    // Could be used in onBeforeAnimation or onAfterAnimation callbacks
    $('#yourWrapper').inshide({reset:true});

****

###Demo

You can find a small demo [here](http://jsfiddle.net/f7Qfk/) and play with the *minimum* option

****

###TODO

Add *classfirst* for the first element inside the parent