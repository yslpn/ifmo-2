<?php
/* безымянный класс */
/* имя после слова class не допускается */
$ig = new class {
  function __construct($first = 'Yaroslav', $second = 'Slepukhin') {
      $this->first = $first;
      $this->second = $second;
  }
  function getFullName() { return 'Mr.' . $this->first . ' ' . $this->second; }
};

echo($ig -> getFullName()); //Mr. Yaroslav Sleukhin