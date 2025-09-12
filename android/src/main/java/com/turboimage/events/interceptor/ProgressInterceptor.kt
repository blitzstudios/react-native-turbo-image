package com.turboimage.events.interceptor

import okhttp3.Interceptor
import okhttp3.Response

class ProgressInterceptor : Interceptor {
  override fun intercept(chain: Interceptor.Chain): Response {
    val request = chain.request()
    val progressId = request.header(PROGRESS_ID_HEADER)
    val originalResponse = chain.proceed(request)
    return if (progressId != null && originalResponse.body != null) {
      val listener = ProgressListener { bytesRead, contentLength, done ->
        ProgressRegistry.notify(progressId, bytesRead, contentLength, done)
      }
      originalResponse.newBuilder()
        .body(ProgressResponseBody(originalResponse.body!!, listener))
        .build()
    } else {
      originalResponse
    }
  }

  companion object {
    const val PROGRESS_ID_HEADER = "X-TurboImage-Progress-Id"
  }
}
