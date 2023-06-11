import uniqid from 'uniqid';


export default function getItemsForSale () {
    function _importAll(r) {
        return r.keys().map(r);
    }

    const itemList = [
        {
            id: uniqid(),
            name: 'Grandfather Clock',
            description: 'This is a grandfather clock, manufactured in 1855.',
            price: 30279,
            itemKey: 'grandfather_clock'
        },
        {
            id: uniqid(),
            name: 'Victrola Cabinet',
            description: 'A well maintained Victor Victrola Phonograph Cabinet. Manufactured in 1920.',
            price: 1279,
            itemKey: 'victrola_cabinet'
        },
        {
            id: uniqid(),
            name: 'Water Pitcher',
            description: 'This is a very old water pitcher. Manufactured in 1795.',
            price: 10000,
            itemKey: 'water_pitcher'
        }
    ];

    const images = _importAll(require.context('../img', false, /\.(png|jpe?g|svg|webp|jpg)$/));

    itemList.forEach(item => {
        images.forEach(image => {
            if (image.includes(item.itemKey)) {
                item['image'] = image;
            }
        });
    });

    return itemList;
}
