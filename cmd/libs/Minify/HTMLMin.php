<?php

/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

class HTMLMin {
  public static function minify ($html) {
    return trim (preg_replace (array ('/\>[^\S ]+/su', '/[^\S ]+\</su', '/(\s)+/su'), array ('>', '<', '\\1'), $html));
  }
}