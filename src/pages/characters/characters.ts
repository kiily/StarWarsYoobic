import { HomePage } from './../home/home';
import { DetailsPage } from '../details/details';
import { Character } from '../../app/models/characters.model';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {

  characters : Character[] = [new Character("Darth Revan", "https://fsmedia.imgix.net/10/4d/b3/55/1053/4d66/814d/281365270243/revan-1jpg.jpeg", `Revan—renowned as the Revanchist, honored as the Revan, reviled as Revan the Butcher, 
  dreaded as the Dark Lord of the Sith Darth Revan, and praised as the Prodigal Knight—was a Human male who played pivotal roles as both Jedi and Sith in the Mandalorian Wars, Jedi Civil War, and Great Galactic War.`,
`Revan—renowned as the Revanchist, honored as the Revan, reviled as Revan the Butcher, dreaded as the Dark Lord of the Sith Darth Revan, and praised as the Prodigal Knight—was a Human male who played pivotal roles as both Jedi and Sith in the Mandalorian Wars, Jedi Civil War, and Great Galactic War.

Believed to have been born in the Outer Rim Territories around the year 3994 BBY, the man later known as Revan was found by the Jedi Order at an early age and became apprenticed to the Jedi Master Kreia. The Padawan had an insatiable hunger for knowledge and learned everything she knew, and then studied under a number of other Masters, quickly becoming the Jedi's most promising pupil. Alongside his friend Alek, he became a Jedi Knight and a vocal and charismatic critic of the Order's inactivity in the ongoing Mandalorian Wars between the Galactic Republic and the Mandalorian Neo-Crusaders. In defiance of the Jedi Council, the Knight took upon the name Revan and started the Revanchist movement to combat the Mandalorian threat as the Republic Military's Supreme Commander.

Revan and his forces gradually pushed back the Mandalorians system after system, savings countless worlds at the price of devastating moral compromises. And thus, as the war waged on, Revan fell deeper and deeper to the dark side. On the battlefield of Dxun, Revan sacrificed thousands of lives to uproot the Mandalorian headquarters. The war climaxed in the battle of Malachor V, where Revan defeated the Mandalorian leader Mandalore the Ultimate in single-combat and ordered the activation of a superweapon, known as the Mass Shadow Generator, which destroyed much of his fleet, the entirety of the Mandalorians', and the planet itself, killing countless but ending the war in the process.

With the Mandalorians defeated, the galaxy hailed Revan and his partner Alek, now known as Malak, as the greatest of heroes. However, the two vanished into the Unknown Regions and followed the trail of a mysterious Sith influence behind the war. They discovered a hidden Sith Empire and were mentally dominated by the power of their Sith Emperor—Vitiate. The newly anointed Darth Revan and Darth Malak were sent out as the Emperor's servants to find an ancient automated shipyard known as the Star Forge to escalate the Sith's plans for war. However, the pair broke free from Vitiate's mental control and used the Star Forge for themselves, creating their own Sith Empire and a fleet of warships. Revan and Malak, motivated to unify the galaxy so that they could destroy the Emperor and the hidden Sith threat, returned to the galaxy as conquerors and waged war against the Jedi and the Republic in the resultant Jedi Civil War.

Darth Revan won battle after battle against the forces that opposed him. Many worlds, still inspired by the sacrifices Revan had made for them during the Mandalorian Wars, joined his cause willingly. The new Sith Empire quickly took hold of a third of galactic territory. In a desperate gamble to end the war, a Jedi strike team led by Bastila Shan ambushed Revan's fleet. The nearby and power-hungry Darth Malak took advantage of Revan's momentary distraction and fired aboard Revan's flagship. Revan was nearly killed, but Bastila kept him alive through the Force and took him back before the surviving Jedi Masters for judgment.

After much debate, the Jedi Council used their power to wipe Darth Revan's mind and programmed him with a new identity as a Republic soldier stationed aboard the Endar Spire. However, Darth Malak, now the leader of Revan's Empire, attacked the cruiser above the planet Taris in an attempt to capture Bastila Shan. Revan, Bastila, and other newfound companions escaped, but the Sith destroyed the planet's surface in the process. The group traveled to the Jedi Enclave where Revan was retrained as a Jedi. The surviving Masters tasked Revan to locate the Star Maps—artifacts that would lead to the Star Forge. Revan picked up more companions on his journey and grew close with Bastila, but they were eventually intercepted by Malak's flagship. Malak revealed to Revan his true identity as the former Dark Lord and captured and corrupted Bastila to the dark side. In a final climactic battle, Revan led the remaining Republic fleet against the Star Forge, redeemed Bastila back to the light side, and killed Malak in battle, earning the Cross of Glory and ending the war.

Revan married Bastila and sank into obscurity for several years until he began to have visions of a mysterious threat from his past. Believing the fate of the galaxy was at risk, Revan left his wife and unborn child behind in search for answers. Revan rediscovered Vitiate's Sith Empire but was quickly captured and imprisoned. Elsewhere, remnants of Revan's Sith Empire, led by his former Master Kreia, purged the tattered Jedi Order to the brink but were destroyed by an exiled Jedi named Meetra Surik. A former protégé of Revan's, Meetra sought out and rescued him with the help of the Sith Lord Scourge. The trio attempted to assassinate the Emperor but failed. Revan was put in stasis for three hundred years, his mind probed and ravaged by Vitiate and his Dread Masters. In return, Revan telepathically influenced the Emperor, amplifying his fear of death and tempering his hatred, stalling the Sith's invasion of the galaxy for centuries. When war finally broke out, Revan manipulated Vitiate into ending the conflict with the Treaty of Coruscant before total Sith victory was inevitable. Tensions between the Jedi and Sith soon rose again and Revan was freed by Republic forces. Revan took control of the Foundry, an ancient space station, to construct an army of extermination droids that would destroy the Empire. Revan was defeated and killed by an Imperial strike team before his plans came to fruition.

However, the torture Revan experienced at the hands of the Sith had splintered Revan's mind in two. Although his lighter half became one with the Force, the darker half rejected death and set out to destroy the Emperor. Vitiate's physical body had already been destroyed in battle, but his spirit lingered, so Revan planned on resurrecting the weakened Emperor to a physical body so that he could kill him permanently. Both the Empire and Republic discovered his plans and joined together in an effort to stop him, fearing his meddling would only bring untold destruction. Revan's light side spirit aided the coalition in defeating the dark Revan on Yavin 4, and though the Emperor was able to regain his strength and returned, the two halves of Revan merged together in peace and died a final death. Revan's influence and imprint on the galaxy continued for many millennium, shaping Force ideology and military strategy. The Sith Lord Darth Bane discovered Revan's Sith Holocron and used its teachings to destroy the reigning Brotherhood of Darkness and as the philosophical foundation for the Rule of Two, paving the way for Darth Sidious and his Galactic Empire.`)] 
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController) {
    menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionsPage');
    console.log(this.navCtrl.getActive());
  }

  toDetailsPage(character : Character){
    this.navCtrl.push(DetailsPage, {
      character: character
    });
  }

  addToFavorites(){

  }

 

}
