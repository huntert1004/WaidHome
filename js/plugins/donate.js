function donate() {
    parent.document.getElementById("datat2").src = "donate.html"
    buffer = "Here is a list of charities to donate to."
    starttextanimation(buffer, question)
    speak(buffer);
}