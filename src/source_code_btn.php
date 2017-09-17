<?php
function sourceCodeBtn($href) {
  echo
  "
    <form target=\"_blank\" action=\"$href\">
      <button type=\"submit\" class=\"btn btn-primary btn-sm\">
        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>
        Source Code
      </button>
    </form>
  ";
}
?>
