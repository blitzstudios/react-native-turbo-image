package com.turboimage

import android.content.Context
import coil.ImageLoader
import okhttp3.OkHttpClient
import com.turboimage.events.interceptor.ProgressInterceptor

object ImageLoaderProvider {
  @Volatile private var defaultLoader: ImageLoader? = null
  @Volatile private var urlCacheLoader: ImageLoader? = null

  private fun buildOkHttpClient(): OkHttpClient {
    return OkHttpClient.Builder()
      .addInterceptor(ProgressInterceptor())
      .build()
  }

  private fun buildImageLoader(
    context: Context,
    respectCacheHeaders: Boolean,
    observerEnabled: Boolean
  ): ImageLoader {
    return ImageLoader.Builder(context)
      .okHttpClient(buildOkHttpClient())
      .respectCacheHeaders(respectCacheHeaders)
      .networkObserverEnabled(observerEnabled)
      .build()
  }

  fun get(context: Context, respectCacheHeaders: Boolean): ImageLoader {
    return if (respectCacheHeaders) {
      urlCacheLoader ?: synchronized(this) {
        urlCacheLoader ?: buildImageLoader(context, true, true).also { urlCacheLoader = it }
      }
    } else {
      defaultLoader ?: synchronized(this) {
        defaultLoader ?: buildImageLoader(context, false, true).also { defaultLoader = it }
      }
    }
  }
}


