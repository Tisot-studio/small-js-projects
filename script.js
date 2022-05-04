const container = document.querySelector('.container');


projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'card';

    const coverContainer = document.createElement('div');
    coverContainer.className = 'cover__container';
    const img = document.createElement('img');
    img.src = project.cover;
    img.alt = 'projects-cover';


    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description__container';

    const text = document.createElement('p');
    text.textContent = project.description;

    const linksContainer = document.createElement('div');
    linksContainer.className = 'links__container';

    const linkLive = document.createElement('a');
    linkLive.setAttribute('href', `${project.linkLive}`);
    linkLive.setAttribute('target', '_blank');
    linkLive.textContent = 'Live demo';


    const linkSource = document.createElement('a');
    linkSource.setAttribute('href', `${project.linkGithub}`);
    linkSource.setAttribute('target', '_blank');
    linkSource.textContent = 'Source code';

    coverContainer.appendChild(img);
    descriptionContainer.appendChild(text);
    linksContainer.append(linkLive, linkSource);

    card.append(coverContainer, descriptionContainer, linksContainer);
    container.append(card);
});