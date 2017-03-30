<?php

/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

class CSSMin {
  public static function minify ($css) {
    $comment     = '/\*[^*]*\*+(?:[^/*][^*]*\*+)*/';
    $dq = '"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"';
    $sq = "'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'";
    $css = preg_replace ("<($dq|$sq)|$comment>Ss", "$1", $css);
    $css = preg_replace_callback ('<' . '\s*([@{};,])\s*' . '| \s+([\)])' . '| ([\(:])\s+' . '>xS', function ($m) { unset ($m[0]); return current (array_filter ($m)); }, $css);
    return trim ($css);
  }
}