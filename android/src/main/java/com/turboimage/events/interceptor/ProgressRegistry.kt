package com.turboimage.events.interceptor

import java.util.concurrent.ConcurrentHashMap

object ProgressRegistry {
  private val progressListeners = ConcurrentHashMap<String, ProgressListener>()

  fun register(progressId: String, listener: ProgressListener) {
    progressListeners[progressId] = listener
  }

  fun unregister(progressId: String) {
    progressListeners.remove(progressId)
  }

  fun notify(progressId: String, bytesRead: Long, contentLength: Long, done: Boolean) {
    progressListeners[progressId]?.update(bytesRead, contentLength, done)
  }
}


