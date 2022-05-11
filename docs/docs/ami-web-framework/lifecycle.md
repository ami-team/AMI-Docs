# Lifecycle

Every AMI Component has a list of events you can listen to.

## onReady

When an AMI component is ready to be used, you can use the `onReady` function.

For example, if you'd like to show a toast when your subapp or control is loaded :

```js
$AMIClass("CommandApp", {
    $extends: ami.SubApp,

    $init: function () {
        this.$super.$init();
    },

    onReady: function () {
        amiWebApp.success("I'm ready!", true);
    },
});
```

Note that the onReady event can also take a parameter which represents the userdata of the current user.

## onRefresh

## onLogin

## onLogout
