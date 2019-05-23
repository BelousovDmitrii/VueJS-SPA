<?
class Tarif {
    public function getTarifList() {
        return file_get_contents('https://www.sknt.ru/job/frontend/data.json');
    }
}

$tarif = new Tarif();

echo $tarif->getTarifList();