package srinivas.msprofileevaluator;

import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import android.os.Handler;

import java.util.List;


public class MainActivity extends ActionBarActivity {
    WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webView = (WebView) findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        //webView.setPadding(0, 0, 0, 0);
        // webView.setInitialScale(0);

        webView.loadUrl("file:///android_asset/index.html");
        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setBuiltInZoomControls(true);
        webView.getSettings().setDisplayZoomControls(false);

        ColorDrawable colorDrawable = new ColorDrawable(Color.parseColor("#01579B"));
        getSupportActionBar().setBackgroundDrawable(colorDrawable);

//Back press

        webView.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if (event.getAction() == KeyEvent.ACTION_DOWN) {
                    WebView webView = (WebView) v;

                    switch (keyCode) {
                        case KeyEvent.KEYCODE_BACK:
                            if (webView.canGoBack()) {
                                webView.goBack();
                                return true;
                            }
                            break;
                    }
                }

                return false;
            }
        });



    }

    // Back press again
    boolean doubleBackToExitPressedOnce = false;

    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(this, "Press back button again to exit", Toast.LENGTH_SHORT).show();

        new Handler().postDelayed(new Runnable() {

            @Override
            public void run() {
                doubleBackToExitPressedOnce = false;
            }
        }, 2000);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }



    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        switch (item.getItemId()) {
            case R.id.rate:
                openRate();
                return true;
            case R.id.about:
                openAbout();
                return true;
            case R.id.disclaimer:
                openDisclaimer();
                return true;
            case R.id.menu_item_share:
                openShare();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }


    }

    public void openRate(){

        Uri uri = Uri.parse("https://play.google.com/store/apps/details?id=srinivas.msprofileevaluator"); // missing 'http://' will cause crashed
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(intent);




    }

    public void openAbout(){


        WebView webView = (WebView) findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        //webView.setPadding(0, 0, 0, 0);
        // webView.setInitialScale(0);

        webView.loadUrl("file:///android_asset/about.html");
        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setBuiltInZoomControls(true);
        webView.getSettings().setDisplayZoomControls(false);

    }



    public void openDisclaimer(){

        WebView webView = (WebView) findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        WebView wv = new WebView(this);
        wv.setWebChromeClient(new WebChromeClient());
        //webView.setPadding(0, 0, 0, 0);
        // webView.setInitialScale(0);

        webView.loadUrl("file:///android_asset/dis.html");
        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setBuiltInZoomControls(true);
        webView.getSettings().setDisplayZoomControls(false);


    }

    public void openShare() {

        Intent sharingIntent = new Intent(android.content.Intent.ACTION_SEND);//android.content.Intent.ACTION_SEND
        sharingIntent.setType("text/plain");
        sharingIntent.putExtra(Intent.EXTRA_SUBJECT, "");
        String shareText = "Master Science(MS) Profile Evaluation for Universities: https://play.google.com/store/apps/details?id=srinivas.msprofileevaluator";
        sharingIntent.putExtra(Intent.EXTRA_TEXT, shareText);


        //display apps that support the intent
        List<ResolveInfo> respondingApps = getPackageManager().queryIntentActivities(sharingIntent,0);
        for(ResolveInfo ri : respondingApps){
            ComponentName name = new ComponentName(ri.activityInfo.packageName,ri.activityInfo.name);
            Log.v("TAG", "-->" + ri.loadLabel(getPackageManager()));
        }

        startActivity(Intent.createChooser(sharingIntent, "Share using"));

    }

}