package com.awesomeproject;

import android.app.Activity;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactRootView;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.shell.MainReactPackage;
import com.pusherman.networkinfo.RNNetworkInfoPackage;
import android.os.Bundle;

// Add the imports
// import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdater;
// import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdater.ReactNativeAutoUpdaterUpdateType;
// import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdater.ReactNativeAutoUpdaterFrequency;
// import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdaterActivity;

import com.rnfs.RNFSPackage;

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    // START AUTO UPDATER

    // Add required methods
    /**
    *  URL for the metadata of the update.
    * */
    // @Override
    // protected String getUpdateMetadataUrl() {
    //     return "https://www.dropbox.com/s/mp8jwks69oesyks/android-update.json?raw=1";
    // }

    /**
    * Name of the metadata file shipped with the app.
    * This metadata is used to compare the shipped JS code against the updates.
    * */
    // @Override
    // protected String getMetadataAssetName() {
    //     return "metadata.android.json";
    // }

     /**
    * 
    *  If your updates metadata JSON has a relative URL for downloading
    *  the JS bundle, set this hostname.
    * */
    // @Override
    // protected String getHostnameForRelativeDownloadURLs() {
    //     return "https://www.dropbox.com";
    // }

    /**
    *  Decide what type of updates to download.
    * Available options -
    *  MAJOR - will download only if major version number changes
    *  MINOR - will download if major or minor version number changes
    *  PATCH - will download for any version change
    * default value - PATCH
    * */
    // @Override
    // protected ReactNativeAutoUpdaterUpdateType getAllowedUpdateType() {
    // return ReactNativeAutoUpdater.ReactNativeAutoUpdaterUpdateType.MINOR;
    // }

    /**
    *  Decide how frequently to check for updates.
    * Available options -
    *  EACH_TIME - each time the app starts
    *  DAILY     - maximum once per day
    *  WEEKLY    - maximum once per week
    * default value - EACH_TIME
    * */
    // @Override
    // protected ReactNativeAutoUpdaterFrequency getUpdateFrequency() {
    // return ReactNativeAutoUpdaterFrequency.EACH_TIME;
    // }

    /**
    *  To show progress during the update process.
    * */
    // @Override
    // protected boolean getShowProgress() {
    // return false;
    // }

    //END AUTO UPDATER

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new RNNetworkInfoPackage())
                .addPackage(new RNFSPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "aeyrium", null);

        setContentView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }    

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }    

    @Override
     public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

      
}