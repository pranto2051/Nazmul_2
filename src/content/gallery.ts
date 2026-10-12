import type {Figure} from '@/types'; import {IMG} from './images';
export const gallery:Figure[]=[
{src:IMG.pancreasCT,alt:'Demo axial medical scan representing pancreatic CT analysis',caption:'Pancreatic CT preprocessing view for the current research workflow.',category:'segmentation',demo:true,aspect:'wide'},
{src:IMG.segmentation3D,alt:'Demo three-dimensional medical segmentation rendering',caption:'Three-dimensional segmentation rendering illustrating volumetric model output.',category:'segmentation',demo:true,aspect:'wide'},
{src:IMG.vitArchitecture,alt:'Demo Vision Transformer architecture diagram',caption:'Vision Transformer architecture overview for image-classification experiments.',category:'architecture',demo:true,aspect:'wide'},
{src:IMG.gradcamOverlay,alt:'Demo Grad-CAM activation overlay on a leaf image',caption:'Grad-CAM overlays on misclassified guava leaves, field-condition subset.',category:'xai',demo:true,aspect:'square'},
{src:IMG.confusionMatrix,alt:'Demo confusion matrix visualization',caption:'Confusion matrix layout for class-wise error inspection.',category:'results',demo:true,aspect:'square'},
{src:IMG.rocCurve,alt:'Demo receiver operating characteristic curve',caption:'ROC curve layout for threshold and class-separation analysis.',category:'results',demo:true,aspect:'wide'},
{src:IMG.ensembleDiagram,alt:'Demo ensemble learning architecture diagram',caption:'Weighted voting and stacking ensemble workflow.',category:'architecture',demo:true,aspect:'wide'},
{src:IMG.leafDataset,alt:'Demo field-condition leaf image collection',caption:'Field-condition leaf image samples prepared for classification.',category:'results',demo:true,aspect:'wide'},
{src:IMG.skinnetArch,alt:'Demo lightweight CNN architecture',caption:'SkinNet lightweight CNN architecture overview.',category:'architecture',demo:true,aspect:'wide'},
{src:IMG.conferenceTalk,alt:'Demo image representing a conference presentation',caption:'Conference presentation and research dissemination.',category:'event',demo:true,aspect:'wide'},
{src:IMG.guestLecture,alt:'Demo image representing a university guest lecture',caption:'Guest lecture on AI, Data Intelligence, and research methodology.',category:'event',demo:true,aspect:'wide'},
{src:IMG.ccnaCertificate,alt:'Demo image representing a CCNA certificate',caption:'Cisco Certified Network Associate credential.',category:'certificate',demo:true,aspect:'wide'}];
