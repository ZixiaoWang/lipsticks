export const parseColors = (hexOrRgbString = '') => {
    let color = hexOrRgbString;
    let r, g, b;

    if (/^\#?[a-fA-F0-9]{6}$/.test(hexOrRgbString) ||
        /^\#?[a-fA-F0-9]{3}$/.test(hexOrRgbString)) {
        color = color.replace('#', '');
        if (color.length === 6) {
            r = parseInt(color.substring(0, 1), 16);
            g = parseInt(color.substring(2, 3), 16);
            b = parseInt(color.substring(4, 5), 16);
        } else if (color.length === 3) {
            r = parseInt(color.substring(0, 1), 16);
            g = parseInt(color.substring(2, 3), 16);
            b = parseInt(color.substring(4, 5), 16);
        }

        return {
            r, g, b,
            rgb: `rgb(${[r, g, b].join(', ')})`,
            hex: '#' + color.join('')
        }
    }

    if (/^rgba?\([\d\.\s\,]+\)$/.test(hexOrRgbString)) {
        color = color.split('(')[1];
        color = color.split(')')[0];
        color = color.split(',').map(item => item.trim());
        r = parseInt(color[0]);
        g = parseInt(color[1]);
        b = parseInt(color[2]);
        return {
            r, g, b,
            rgb: `rgb(${[r, g, b].join(', ')})`,
            hex: '#' + [r, g, b].map(item => {
                let hex = item.toString(16);
                if (hex.length === 1) {
                    return '0' + hex;
                }
                return hex;
            }).join('')
        }
    }

    return null;
}