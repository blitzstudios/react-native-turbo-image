package com.turboimage.events.interceptor

fun interface ProgressListener {
  fun update(bytesRead: Long, contentLength: Long, done: Boolean)
}
