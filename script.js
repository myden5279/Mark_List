var textArea = document.getElementById('login');
var text = document.getElementById('rollno');
var mainoutput = document.getElementById('mainoutput');
var results = {'Brein Austin J': ['96', '91', '98', '94', '96', '99'], 'Dinesh Kumar A': ['95', '90', '91', '90', '94', '95'], 'Guru Murthy R': ['89', '81', '90', '92', '92', '96'], 'Jawahar Bhalaji P': ['95', '88', '98', '98', '97', '98'], 'Jaya Ganesh R': ['85', '86', '87', '84', '87', '91'], 'Kalai Selvan B': ['89', '92', '92', '100', '97', '99'], 'Kishore Kumar V R': ['92', '89', '92', '100', '99', '99'], 'Madeshwaran R': ['92', '94', '93', '92', '95', '93'], 'Paramesh R S': ['89', '91', '90', '98', '97', '96'], 'Prasanth P': ['91', '93', '89', '88', '91', '94'], 'Prasanth S': ['92', '93', '86', '90', '90', '93'], 'Rajasekar M': ['70', '76', '84', '80', '91', '90'], 'Rakesh P': ['96', '93', '95', '100', '99', '100'], 'Riyaz R': ['85', '84', '93', '98', '98', '97'], 'Sachin R': ['88', '94', '90', '98', '95', '99'], 'Santhana Pandian M': ['92', '89', '88', '90', '88', '96'], 'Sham S': ['93', '   89', '100', '100', '95', '100'], 'Singaram K': ['92', '88', '88', '92', '81', '92'], 'Surya Kumar K': ['90', '92', '85', '88', '88', '96'], 'Vasanth Kumar V': ['91', '94', '93', '90', '94', '92'], 'Yukesh Kumar K': ['85', '92', '92', '94', '96', '98'], 'Anandha Krishnan M': ['96', '91', '100', '100', '100', '100'], 'Aravind Raj R': ['95', '93', '95', '100', '98', '100'], 'Bharath Kumar S': ['92', '88', '90', '92', '93', '95'], 'Bhuvanesh M': ['86', '85', '93', '90', '95', '92'], 'Gladwin A J': ['95', '93', '98', '100', '98', '100'], 'Gokula Kannan S': ['85', '72', '87', '88', '87', '95'], 'Gowtham C': ['87', '93', '84', '80', '83', '87'], 'Gunalan L A': ['89', '65', '88', '84', '85', '81'], 'Kaleeshwaran T': ['89', '90', '88', '82', '86', '89'], 'Kiran G': ['89', '91', '86', '82', '84', '92'], 'Mahendiran S': ['94', '82', '95', '84', '89', '91'], 'Mohmaed Abdullah F': ['86', '90', '86', '80', '86', '90'], 'Mohan Kumar A': ['89', '90', '91', '92', '87', '94'], 'Naresh Krishnan G': ['92', '89', '93', '94', '90', '98'], 'Naveen Kumar K': ['89', '92', '96', '90', '89', '94'], 'Naveen Kumar S': ['89', '94', '90', '94', '89', '92'], 'Naveen Raj K': ['89', '90', '93', '90', '91', '91'], 'Nithya Kumar R': ['90', '84', '86', '92', '88', '92'], 'Praveen Kumar T': ['92', '90', '90', '94', '90', '95'], 'Sabari H': ['90', '93', '95', '100', '99', '100'], 'Sai Nithin S': ['86', '00', '90', '92', '87', '93'], 'Sajith Yahya M': ['91', '94', '97', '98', '97', '94'], 'Sanjay Kumar M': ['86', '78', '92', '94', '92', '91'], 'Santhosh Kumar S': ['    90', '90', '96', '98', '96', '95'], 'Saravanan A': ['94', '89', '92', '92', '97', '96'], 'Saravannan S G': ['95', '83', '90', '90', '95', '91'],'Sham K S':['93','89','100','100','95','100'], 'Siddarthdharan S A': ['90', '85', '92', '94', '87', '94'], 'Sreerag K B': ['93', '91', '86', '96', '91', '96'], 'Subash Ram Vel C': ['89', '84', '90', '82', '89', '82'], 'Sudharsanan R': ['90', '94', '95', '100', '95', '98'], 'Sumirson K': ['90', '91', '90', '92', '84', '91'], 'Vallavan S': ['91', '92', '88', '84', '86', '87'], 'Venkatesan P': ['84', '91', '95', '98', '95', '94'], 'Vignesh J': ['93', '92', '92', '90', '86', '92'], 'Vignesh V': ['89', '87', '95', '98', '93', '95'], 'Vikram T': ['94', '93', '92', '90', '89', '93'], 'Vinoth Kumar P': ['85', '92', '92', '92', '91', '97'], 'Vishnu S': ['94', '90', '98', '94', '95', '91']};
var info = document.getElementsByClassName('info');
var group = document.getElementById('group');
mainoutput.hidden = true;


function showResult(){
    var counter = 1;
    var given = text.value;
    for(let i in results){
        if(counter == given){
            //hiding the main output and displaying the details
            mainoutput.hidden = false;
            textArea.hidden = true;

            //setting the name and rollno
            info[0].innerText = i;
            info[1].innerText = counter;

            // setting the group
            if(counter > 21){
                group.innerHTML = '<b>CS</b>';
            } else {
                group.innerHTML = '<b>Bio</b>';
            }

            count = 2;
            total = 0;
            for(let j of results[i]){
                info[count].innerText = j;
                count ++;
                total += parseInt(j);
            }
            info[8].innerText = total;
        }
        counter++;
    }
}