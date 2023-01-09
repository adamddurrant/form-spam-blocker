# Spam Reduction Form Regex

A quick way to reduce spam submitted inside your website forms.

The script disables the form submit button if the regex matches certain keywords or queries that are submitted in the `<textarea>`.

## Motivation

I use [formspree](https://formspree.io/) to handle [my personal site](https://adamdurrant.co.uk) form submissions but only get 50 submissions monthly for free (this is plenty for me).

I found that even with a captcha, i'd regularly get link/guest post spammers in my inbox. This form significantly reduces spam emails for me personally.

## Screenshot

![screenshot](/screenshot.png)

## How to use it

The script is super easy to amend and deploy, simply edit the regex inside the following parenthesis (i've included keywords regular for me.):

```javascript
!textBox.match(
  /link build|guest post|quality links|da[0-9]|DA[0-9]|https:|http:|hello dear/g
);
```

Then hook it up to your form text area by replacing the following ID variables:

```javascript
let fullMessage = document.getElementById("formMessage");
let submitButton = document.getElementById("submitButton");
```

## Try it

Play with this to see how it works [over on codepen](https://codepen.io/ADurrant/pen/ExRxOPW).
