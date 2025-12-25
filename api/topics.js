const spreadsheet_id = '1oiQXvLxJO8WXE9OADI4Ss1_znS-WPgpU0-o_ZeyWoWs';

export default async function handler(req, res) {
    try {
        let topicinfo = [];
        let topicnames = [];
        let response = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheet_id}/export?gid=879767518&format=tsv`);
        let data = await response.text();
        let firstline = data.substring(0, data.indexOf('\n'));
        while(firstline.indexOf('\t') != -1) {
            if(firstline.substring(0, firstline.indexOf('\t'))) {
                topicnames.push(firstline.substring(0, firstline.indexOf('\t')));
            }
            firstline = firstline.substring(firstline.indexOf('\t') + 1);
        }
        for(let i=0; i < topicnames.length; i++) topicinfo.push([]);
        data = data.substring(data.indexOf('\n') + 1);
        let counter = 0;
        let last = false;
        while(data.indexOf('\n') != -1 || last) {
            let temp;
            if(last) {
                temp = data.substring(0);
            } else {
                temp = data.substring(0, data.indexOf('\n'));
            }
            do {
                let question = "";
                let answer = "";
                if (temp.substring(0, temp.indexOf('\t')) != "") {
                    question = temp.substring(0, temp.indexOf('\t'));
                    temp = temp.substring(temp.indexOf('\t') + 1);
                    if(temp.indexOf('\t') == -1) {
                        answer = temp.substring(0);
                    } else {
                        answer = temp.substring(0, temp.indexOf('\t'));
                        temp = temp.substring(temp.indexOf('\t') + 1);
                    }
                    topicinfo[counter].push({'Question': question, 'Answer': answer});
                } else {
                    temp = temp.substring(temp.indexOf('\t') + 1);
                    temp = temp.substring(temp.indexOf('\t') + 1);
                }
                counter++;
            } while (counter < topicinfo.length)
            counter = 0;
            data = data.substring(data.indexOf('\n') + 1);
            if(last) {
                last = false;
            } else if(data.indexOf('\n') == -1) {
                last = true;
            }
        }
        res.status(200).json({'thetopicnames': topicnames, 'thetopicinfo': topicinfo});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}