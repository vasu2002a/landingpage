const scrollRevealOPtion ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
scrollReveal().reveal(".header_image img", {
    ...scrollRevealOPtion,
    origin:"right",
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOPtion,
    origin: "right",
    delay: 500,
});
scrollReveal().reveal(".header_content p", {
    ...scrollRevealOPtion,
    origin: "right",
    delay: 1000,
});
scrollReveal().reveal(".header_content form", {
    ...scrollRevealOPtion,
    origin: "right",
    delay: 1500,
});