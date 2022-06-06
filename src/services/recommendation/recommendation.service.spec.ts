import {TestBed} from '@angular/core/testing';

import {RecommendationService} from './recommendation.service';
import {RecommendationModel} from '../../model/recommendation.model';
import {CandidateUserModel, UserModel} from '../../model/user.model';
import {RecommendationAlgorithm} from '../../utils/recommendation.algorithm';

describe('RecommendationService', () => {
    let service: RecommendationService;
    let recommentation: RecommendationModel;
    const postJsonString = '[{"uuid":1,"country":"Bolivia","city":"La Paz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost1.jpg?alt=media","title":"Mojix, Professional Services","shortDescription":"Professional Services Engineers for PS Team"},"tags":["Support","Javascript","IOT","SCRUM","Lead"]},{"uuid":2,"country":"Bolivia","city":"La Paz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost2.jpg?alt=media","title":"Mojix, Front End","shortDescription":"Senior Front End Developers"},"tags":["Javascript","Angular","React","Solid","Jira"]},{"uuid":3,"country":"Bolivia","city":"La Paz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost3.jpg?alt=media","title":"Mojix, .Net Developer","shortDescription":"Junior .Net developers"},"tags":[".net","Microsoft","Typescript","Flutter","SCRUM"]},{"uuid":4,"country":"Bolivia","city":"La Paz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost4.jpg?alt=media","title":"Mojix, React Engineers","shortDescription":"React Engineers in LATAM"},"tags":["Javascript","React","Redux","KPIs","Flutter"]},{"uuid":5,"country":"Bolivia","city":"Cochabamba","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost5.jpg?alt=media","title":"Aequor, Senior Change Manager","shortDescription":"Senior Change Manager for Organizational Development"},"tags":["Agile","Manager","Support","Lead","Solid"]},{"uuid":6,"country":"Bolivia","city":"Cochabamba","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost6.jpg?alt=media","title":"Nearsure, Data Engineer","shortDescription":"Data Engineer with python"},"tags":["Data","Python","Agile","Jira","SCRUM"]},{"uuid":7,"country":"Bolivia","city":"Santa Cruz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost7.jpg?alt=media","title":"Nearsure, Data Engineer","shortDescription":"Data Engineer with Azure"},"tags":["Data","Microsoft","Azure","Solid","Lead"]},{"uuid":8,"country":"Bolivia","city":"Santa Cruz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost8.jpg?alt=media","title":"Talento, Jefe de linea","shortDescription":"Jefe de linea para canal moderno"},"tags":["Ventas","Marketing","Reportes","Jira",""]},{"uuid":9,"country":"Bolivia","city":"Santa Cruz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.jpg?alt=media","title":"Carmax, Asesor Comercal","shortDescription":"Carmax, Asesor Comercal"},"tags":["Ventas","Marketing","Automóviles","KPIs",""]},{"uuid":10,"country":"Colombia","city":"Bogotá","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost10.jpg?alt=media","title":"Remote, Sr. Android","shortDescription":"Sr. Android development"},"tags":["Android","Kotlin","Agile","Solid",""]},{"uuid":11,"country":"Colombia","city":"Bogotá","accuracy":0,"random":true,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost11.jpg?alt=media","title":"Biomedical","shortDescription":"Biomedical"},"tags":["Biomedical","Medicina","Data","Jira","KPIs"]},{"uuid":12,"country":"Colombia","city":"Medellín","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost12.jpg?alt=media","title":"Oktana, Desarrollador Android","shortDescription":"Desarrollador Android"},"tags":["Android","Kotlin","Agile","Lead","SCRUM"]},{"uuid":13,"country":"Colombia","city":"Medellín","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost13.jpg?alt=media","title":"Talento, Gerente Comercial","shortDescription":"Gerente comercial Nacional"},"tags":["Marketing","Planificación","Ventas","Jira",""]},{"uuid":14,"country":"USA","city":"Miami","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost14.jpg?alt=media","title":"Oktana, Salesforce","shortDescription":"Salesforce Lead Instructor"},"tags":["Salesforce","Agile","Lead","Ventas",""]},{"uuid":15,"country":"USA","city":"Miami","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost15.jpg?alt=media","title":"Rappi, Data Engineer","shortDescription":"Senior Data Engineer AWS DevOps"},"tags":["Data","devOps","AWS","Solid","Lead"]},{"uuid":16,"country":"USA","city":"Miami","accuracy":0,"random":true,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost16.jpg?alt=media","title":"Bago, Repesentante médico","shortDescription":"Representante médico"},"tags":["Medicina","Ventas","Office","KPIs","SCRUM"]},{"uuid":17,"country":"USA","city":"Boston","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost17.jpg?alt=media","title":"Remote, React Native Developer","shortDescription":"React Native Developer"},"tags":["React","Javascript","Typescript","Solid","Jira"]},{"uuid":18,"country":"Italia","city":"Roma","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost18.jpg?alt=media","title":"Remote, Support Ruby","shortDescription":"Support Ruby"},"tags":["Ruby","Data","Agile","Flutter","Lead"]},{"uuid":19,"country":"Bolivia","city":"La Paz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost19.jpg?alt=media","title":"Jalasoft, Full Stack","shortDescription":"Full Stack Developer Bootcamp"},"tags":["Javascript","Agile","Data","Solid",""]},{"uuid":20,"country":"Bolivia","city":"La Paz","accuracy":0,"random":false,"card":{"image":"https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost20.jpg?alt=media","title":"Jalasoft, QA Bootcamp","shortDescription":"QA Bootcamp"},"tags":["QA","Agile","Python","Lead","SCRUM"]}]';
    const defaultUser: CandidateUserModel = new CandidateUserModel(
        '123',
        'Juan Perez',
        'test@upb.edu',
        'Bolivia',
        'La Paz',
        [
            'Javascript',
            'Data',
            'Agile'
        ],
        true
    );

    beforeEach(done => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RecommendationService);
        service.getRecommendations(defaultUser).subscribe(
            data => {
                // recommentation = data;
                recommentation = new RecommendationModel(JSON.parse(postJsonString));
                done();
            },
            error => {
                console.log('Error loading the Data');
                done();
            });
    });

    it('1. Should the input in my jobList contains 20 elements', () => {
        const cards = recommentation.recommendedPosts;
        expect(cards.length).toBe(20);
    });

    it('2. Una recomendación que fue marcada como Like no se debe repetir.', () => {
        // Create algorithm Model
        const algo = new RecommendationAlgorithm(defaultUser,
            recommentation.recommendedPosts,
            service.getHistory(defaultUser.uuid));

        // I liked the 3 first
        algo.history.likes.add('1');
        algo.history.likes.add('2');
        algo.history.likes.add('3');

        // Execute the algo functions
        algo.execute();

        // Obtain posts filtered
        const filtererJobPosts = algo.jobs;
        expect(filtererJobPosts.length).toBe(17);
    });

    it('3. Una recomendación que fue marcada como disLike no se debe repetir.', () => {
        // Create algorithm Model
        const algo = new RecommendationAlgorithm(defaultUser,
            recommentation.recommendedPosts,
            service.getHistory(defaultUser.uuid));

        // I liked the 3 first
        algo.history.disLikes.add('1');
        algo.history.disLikes.add('2');
        algo.history.disLikes.add('3');

        // Execute the algo functions
        algo.execute();

        // Obtain posts filtered
        const filtererJobPosts = algo.jobs;
        expect(filtererJobPosts.length).toBe(17);
    });

    it('4. La primera recomendación debe contener 2 o más preferencias.', () => {
        // Create algorithm Model
        const algo = new RecommendationAlgorithm(defaultUser,
            recommentation.recommendedPosts,
            service.getHistory(defaultUser.uuid));

        // Execute the algo functions
        algo.execute();

        // Obtain posts filtered
        const filtererJobPosts = algo.jobs;
        const firstJob = algo.jobs[0];
        // firstJob.tags --> defaultUser.skills;
        const commonSkills: Array<string> = firstJob.tags.filter(tag => defaultUser.skills.includes(tag));
        expect(commonSkills.length).toBeGreaterThanOrEqual(2);
    });
});
