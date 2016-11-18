module.exports = {
    hub_ip : '192.168.2.158',
    app_id : 'amzn1.ask.skill.2d0c0cde-4386-474e-91c4-7c33a81ab318'//,
    channels : [
         {
           utterance_name : 'schalte um ARD',
           activity: 'Fernsehen',
           channel: "1"
        },
        {
           utterance_name : 'schalte um auf ZDF',
           activity: 'Fernsehen',
           channel: "2"
        },
        {
            utterance_name : 'schalte um auf MDR',
            activity: 'Fernsehen',
            channel: "3"
        }
    ]
};
