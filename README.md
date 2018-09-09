# [Deployed](https://new-age-pizza.herokuapp.com/)

# Pizza Configurator Homework

_Note: we'll use the results of this homework assignment for a formal evaluation and as such you should write the code individually. Plagiarism is a violation of the Academy contract and makes nobody happy._

***

## Intro

Forms are an important part of most real-world web apps. React enables you to make highly interactive forms that update predictably. One good use of forms is a configurator on which you pick a bunch of options and get you a price. 

What better to configure then a pizza? We're programmers after all, so let's make dinner. 

**Send your homework to some@email.com before Saturday 22:00**

## Pizza Configurator

You're asked to create a pizza configurator for NewAgePizza.com, a new and hip venture to get your pizza. It should be a single page that contains all the following elements. 

First you pick your base. You have three options:

1. 25cm NY Style € 8,99
2. 30cm NY Style € 11,49
3. 35cm NY Style € 13,49

After that you pick your sauce options:

1. White sauce
2. Red sauce € 1,00
3. Mix it up € 1,50 

After that you pick one or more toppings:

1. Pineapple
2. Corn
3. Olives (green)
4. Red union
5. Spinach
6. Cherry tomatoes

_Rules: max. 3 toppings, toppings cost € 0,50 apiece_

Last but not least, you can choose turbo-drone-delivery which is an additional 10% on top of the total pizza price. 

Make sure you can change previous steps even if you already changed stuff before. So I could pick a base, a sauce and a topping and switch the base after that. 

Additional instructions:

1. If any base is picked there should always be a price shown for the total pizza. 
2. The Redux store should contain the state of the pizza
3. You don't need any back end connection
4. Make sure you split your app into separate components
5. We expect you to use [controlled form components](https://reactjs.org/docs/forms.html#controlled-components) as they are the best practice

Bonus points if you use [Material-UI](https://material-ui.com) or find another way to make your app look and feel nice!