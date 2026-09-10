class Hero:

    def __init__(self, name, hp, attack, skill=""):

        self.name = name

        self.__hp = hp  # Diubah menjadi private (__hp)

        self.attack = attack

        self.skill = skill


    # Getter untuk mengambil nilai HP
    def get_hp(self):
        return self.__hp


    # Setter dengan validasi data agar HP tidak bisa bernilai negatif

    def set_hp(self, nilai_baru):

        if nilai_baru < 0:

            self.__hp = 0

            print(f"Warning: HP {self.name} tidak boleh negatif! Diatur ke 0.")
        else:

            self.__hp = nilai_baru

    def info(self):

        print(f"Hero: {self.name} | HP: {self.__hp} | Power: {self.attack} | {self.skill}")

    def ultimate(self):

        print(f"{self.name} menggunakan ultimate {self.skill}!")


    def serang(self, lawan):

        print(f"{self.name} menyerang {lawan.name}!")

        lawan.diserang(self.attack)


    def diserang(self, damage):

        # Mengurangi HP private

        hp_sekarang = self.get_hp() - damage
        self.set_hp(hp_sekarang)

        print(f"{self.name} terkena damage {damage}. sisa hp: {self.get_hp()}")



class Mage(Hero):

    def __init__(self, name, hp, attack, mana):

        super().__init__(name, hp, attack)

        self.mana = mana

    def info(self):

        # Menggunakan get_hp() karena __hp milik Hero bersifat private

        print(f"{self.name} [Mage] | HP: {self.get_hp()} | Mana: {self.mana}")


    def skill_fireball(self, lawan):

        if self.mana >= 20:

            print(f"{self.name} menggunakan Fireball ke {lawan.name}!")

            self.mana -= 20

            lawan.diserang(self.attack * 2)
        else:

            print(f"{self.name} gagal skill! Mana tidak cukup.")



# --- Inisialisasi Objek ---

hero1 = Hero("lapu lapu", 100, 15, "mega sword swing")

hero2 = Hero("yu zong", 120, 20, "black dragon warior transform")


# Mengubah HP menggunakan setter (bukan langsung hero1.hp = 3200)

hero1.set_hp(3200)

hero2.set_hp(3500)


hero1.attack = 300

hero2.attack = 285


hero1.info()

hero2.info()


print("\n--- Pertarungan Dimulai ---")

hero1.serang(hero2)

hero2.serang(hero1)


print("\n--- Update Class Hero ---")

eudora = Mage("Eudora", 80, 30, 100)

balmond = Hero("Balmond", 200, 10)
eudora.info()

eudora.serang(balmond)

eudora.skill_fireball(balmond)


# Menjalankan percobaan Name Mangling dari Soal 1:

print(f"Mencoba akses paksa: {hero1._Hero__hp}")


# Menjalankan pengujian Setter dari Soal 2:

hero1.set_hp(-100)


from abc import ABC, abstractmethod

# 1. Interface / Abstract Class

# Ini adalah KONTRAK. Semua turunan wajib punya method di bawah ini.

class GameUnit(ABC):

    @abstractmethod

    def serang(self, target):
        pass


    @abstractmethod
    def info(self):
        pass


# 2. Implementasi pada Class Konkret
class HeroUnit(GameUnit):
    def __init__(self, nama):
        self.nama = nama

    # Kita WAJIB membuat method serang, kalau tidak akan Error
    def serang(self, target):
        print(f"Hero {self.nama} menebas {target}!")

    def info(self):
        print(f"Saya adalah Hero: {self.nama}")


class Monster(GameUnit):

    def __init__(self, jenis):

        self.jenis = jenis


    # Implementasi serang versi Monster

    def serang(self, target):

        print(f"Monster {self.jenis} menggigit {target}!")

    def info(self):

        print(f"Saya adalah Monster: {self.jenis}")



# -- Uji Coba --

# unit = GameUnit() # ERROR! Abstract class tidak bisa jadi objek.

h = HeroUnit("Alucard")

m = Monster("Serigala")
h.info()
m.info()


# Parent Class untuk contoh polymorphism

class PolymorphicHero:

    def __init__(self, nama):

        self.nama = nama

    def serang(self):

        print("Hero menyerang dengan tangan kosong.")



# Child Class 1

class PolymorphicMage(PolymorphicHero):
    def serang(self):

        print(f"{self.nama} (Mage) menembakkan Bola Api! Boom!")



# Child Class 2

class Archer(PolymorphicHero):
    def serang(self):

        print(f"{self.nama} (Archer) memanah dari jauh! Jleb!")



# Child Class 3

class Fighter(PolymorphicHero):
    def serang(self):

        print(f"{self.nama} (Fighter) memukul dengan pedang! Slash!")



# -- Penerapan Polymorphism --

# Kita punya daftar hero campuran

pasukan = [

PolymorphicMage("Eudora"),

Archer("Miya"),

Fighter("Zilong"),

PolymorphicMage("Gord")

]

print("--- PERANG DIMULAI ---")

# Satu perintah loop, tapi respon berbeda-beda (Polymorphism)

for pahlawan in pasukan:

    pahlawan.serang()
    