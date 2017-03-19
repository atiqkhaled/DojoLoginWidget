# DojoLoginWidget
DojoLogin app defines custom widget which rendering login template and given logic to access Dojo most popular FlickerView app.
This app features some custom widget to understand how dojo widget create and mixing with template. 
Following components give you lucid view about the custom widget and loading template activites :

- login.js module (dir `resources/js/login/login.js`)
- mainView.js module (dir `resources/js/flickrview/mainView.js`)

Dojo allows developer to create custom widget using dojo `_WidgetBase` as base class. `login` module define as a custom login 
widget where login template has been rendered and authentication of user been checked. So Developers need to instantiate this
widget either programatically or in declarative way (using dojo attributes  `data-dojo-type` in html element). In declarative
way `parser` parse over the html element to intitiate layout widgets. Following code snippet about declaring widget in html :

```
<td align="center">
   <div  data-dojo-type="login/login"></div>
</td>
```
In custom login widget user credentials has been checked on `postCreate` method and load the `mainView` module if all credentials
is authentic. mainView widget rendering the popular dojo FlickerView template.

```
//attaching event handler
log.submittEvnt.on("click",lang.hitch(this, function() {
    var name = this.userName.get('value');
    var pass = this.passWord.get('value');
    //Check authentication to proceed further
    if(this.dbName.toLowerCase() === name.toLowerCase() && this.dbPass === pass) {
       domConstruct.destroy("mainVew");
       var mainVw = new MainView().placeAt(scrlView);
    }  
}));
```

### License

This project is for research purpose to understand how widget works. Author is **atiqkhlaed**




