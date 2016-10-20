// package com.awesomeproject;

// import android.app.Application;
// import android.util.Log;

// import com.facebook.react.ReactApplication;
// import com.facebook.react.ReactInstanceManager;
// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.ReactPackage;
// import com.facebook.react.shell.MainReactPackage;

// import java.util.Arrays;
// import java.util.List;
// import com.rnfs.RNFSPackage;

// public class MainApplication extends Application implements ReactApplication {

//   private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//     @Override
//     protected boolean getUseDeveloperSupport() {
//       return BuildConfig.DEBUG;
//     }

//     @Override
//     protected List<ReactPackage> getPackages() {
//       return Arrays.<ReactPackage>asList(
//           new MainReactPackage(),
//           new RNFSPackage()
//       );
//     }
//   };

//   @Override
//   public ReactNativeHost getReactNativeHost() {
//       return mReactNativeHost;
//   }
// }


package com.awesomeproject;

import android.app.Application;
//import com.facebook.FacebookSdk;
//import com.facebook.appevents.AppEventsLogger;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
//import com.rnfs.RNFSPackage;

import java.util.Arrays;
import java.util.List;

//import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdaterPackage;
import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    // Inside here!!
    // add required method
    /**
      *  Name of the JS Bundle file shipped with the app.
      *  This file has to be added as an Android Asset.
      * */
    @Nullable
    @Override
    protected String getBundleAssetName() {
        return "main.android.jsbundle";
    }

    // add package to list here
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          //new ReactNativeAutoUpdaterPackage(),
          new MainReactPackage()
      );
    }
    
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }

}
